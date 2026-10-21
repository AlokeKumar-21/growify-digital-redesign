
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "../../../models/Lead";


type LeadPayload = {
  name?: unknown;
  email?: unknown;
  brand?: unknown;
  service?: unknown;
};

const allowedServices = [
  "Website Development & Revamp",
  "Performance Marketing",
  "Email & WhatsApp Marketing",
  "SEO & Social Media",
  "AI & Technology",
  "Not sure yet",
];

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Send data as JSON." },
        { status: 415 }
      );
    }

    const payload: unknown = await request.json();

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    const body = payload as LeadPayload;
    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 254).toLowerCase();
    const brand = cleanText(body.brand, 120);
    const service = cleanText(body.service, 80);

    if (!name || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and service are required.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedServices.includes(service)) {
      return NextResponse.json(
        { success: false, message: "Select a valid service." },
        { status: 400 }
      );
    }

    // Connect to Atlas and save the enquiry.
    await connectToDatabase();

    const lead = await Lead.create({
      name,
      email,
      brand,
      service,
    });

    console.info("Lead saved successfully:", lead._id.toString());

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been saved successfully.",
        leadId: lead._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't save your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
