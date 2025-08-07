"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import usePostData from "@/app/hooks/PostData";
import useFetchData from "@/app/hooks/FetchData";
import { Button } from "@/components/ui/button";

const AssignmentPage = () => {
  const { id } = useParams(); // assignment ID from route
  const router = useRouter();

  const { getData, result, loading, responseError } = useFetchData();
  const { postData, loading: submitting, responseError: submitError } = usePostData();

  const [repoLink, setRepoLink] = useState("");

  // Simulate studentId for now
  const studentId = "student_123";

  useEffect(() => {
    if (id) getData(`/api/assignments/${id}`);
  }, [id]);

  const handleSubmit = async () => {
    if (!repoLink || !repoLink.startsWith("http")) {
      alert("Please enter a valid GitHub link.");
      return;
    }

    const formData = new FormData();
    formData.append("studentId", studentId);
    formData.append("repoLink", repoLink);

    await postData(`/api/assignments/${id}/submit`, formData);

    if (!submitError) {
      alert("Assignment submitted successfully!");
      router.push("/dashboard");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading assignment...</p>;
  if (responseError)
    return (
      <p className="text-center mt-10 text-red-500">
        Error: {responseError || "Assignment not found."}
      </p>
    );

  const assignment = result;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{assignment.title || "frontend web development "}</h1>
      <p className="text-gray-600 mb-1">{assignment.description || "how you optimize image , explain image optimization techniques with proper example "}</p>
      <p className="text-sm text-red-500">Due: {assignment.dueDate || "2082-04-30"}</p>

      <div className="my-6 h-[1px] w-full bg-gray-200" />

      <div className="space-y-4">
        <label className="block font-medium text-gray-700">
          Submit your GitHub repository link
        </label>
        <input
          type="url"
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
          placeholder="https://github.com/username/project"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C5A]"
        />

        {submitError && <p className="text-sm text-red-500">{submitError}</p>}

        <Button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-[#FF8C5A] hover:bg-[#ff763b] text-white px-6 py-3 rounded-lg"
        >
          {submitting ? "Submitting..." : "Submit Assignment"}
        </Button>
      </div>
    </section>
  );
};

export default AssignmentPage;
