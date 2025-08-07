"use client";

import { useEffect } from "react";
import useFetchData from "@/app/hooks/FetchData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const InstructorAssignmentPage = () => {
  const { getData, result: assignments, loading, responseError } = useFetchData();
  const router = useRouter();

  // Assume instructorId is available from auth/session
  const instructorId = "instructor_123";

  useEffect(() => {
    getData(`/api/instructor/${instructorId}/assignments`);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Assignments</h1>

        {/* 🔘 Add Assignment - you’ll implement dialog */}
        <Button variant="default">+ Add Assignment</Button>
      </div>

      {loading && <p>Loading assignments...</p>}
      {responseError && <p className="text-red-500">{responseError}</p>}

      <div className="space-y-6">
        {assignments?.length === 0 && (
          <p className="text-gray-500">No assignments created yet.</p>
        )}

        {assignments?.map((assignment: any) => (
          <div
            key={assignment.id}
            className="border p-5 rounded-lg shadow-sm bg-white space-y-3"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#006A62]">
                {assignment.title}
              </h2>
              <span className="text-sm text-gray-500">
                Due: {assignment.dueDate?.slice(0, 10)}
              </span>
            </div>

            <p className="text-gray-700">{assignment.description}</p>

            {/* Submissions */}
            <div className="mt-3">
              <h3 className="font-medium text-gray-800 mb-2">Submissions:</h3>
              {assignment.submissions?.length === 0 ? (
                <p className="text-sm text-gray-500">No submissions yet.</p>
              ) : (
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {assignment.submissions.map((submission: any) => (
                    <li key={submission.id}>
                      <span className="font-semibold">{submission.studentName}:</span>{" "}
                      <a
                        href={submission.repoLink}
                        target="_blank"
                        className="text-blue-600 underline"
                        rel="noopener noreferrer"
                      >
                        {submission.repoLink}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorAssignmentPage;
