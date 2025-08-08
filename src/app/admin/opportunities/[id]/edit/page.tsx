"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function EditOpportunityPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  return <div>Edit Opportunity Page - ID: {id}</div>;
}