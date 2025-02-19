import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { addLead } from "@/store/leadsSlice";
import { store } from "@/store/store";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Get form fields
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string;
    const country = formData.get("country") as string;
    const visaCategories = JSON.parse(formData.get("visaCategories") as string);
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    // Basic server-side validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !linkedin ||
      !country ||
      !message ||
      !resume
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Handle resume file
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueId = uuidv4();
    const fileExtension = resume.name.split(".").pop();
    const fileName = `${uniqueId}.${fileExtension}`;

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Save file to uploads directory
    await writeFile(join(uploadDir, fileName), buffer);

    // Create lead object
    const lead = {
      id: uniqueId,
      firstName,
      lastName,
      email,
      linkedin,
      country,
      visaCategories,
      resumeUrl: `/uploads/${fileName}`,
      message,
      status: "PENDING" as const,
      createdAt: new Date().toISOString(),
    };

    // Add lead to Redux store
    store.dispatch(addLead(lead));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
