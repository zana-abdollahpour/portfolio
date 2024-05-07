"use client";

import { type MouseEvent, type MouseEventHandler } from "react";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CredentailBoxProps {
  fieldName: string;
  credential: string;
  onClickHandler: MouseEventHandler<HTMLDivElement>;
}

function CredentailsBox({
  fieldName,
  credential,
  onClickHandler,
}: CredentailBoxProps) {
  return (
    <div
      onClick={onClickHandler}
      data-credential={credential}
      className={`w-11/12 max-w-80 rounded-full bg-[var(--project-credentials)] text-sm ${
        credential
          ? "cursor-pointer transition-all hover:scale-[98%] hover:opacity-85 active:translate-y-[2px] active:scale-95"
          : ""
      }`}
    >
      <span className="mr-4 inline-flex items-center rounded-full border px-4 py-1">
        <HiDocumentDuplicate className="mr-2 inline-block" />
        {fieldName}
      </span>
      <span>{credential ? credential : "Not Required"}</span>
    </div>
  );
}

export default function Credentials({
  credentials,
}: {
  credentials: string[];
}) {
  const handleCredentialCopy = (e: MouseEvent<HTMLDivElement>) => {
    const credential = e.currentTarget.dataset.credential!;
    navigator.clipboard
      .writeText(credential)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        pauseOnFocusLoss={false}
        theme="colored"
      />
      <CredentailsBox
        fieldName="Email"
        credential={credentials[0]}
        onClickHandler={handleCredentialCopy}
      />
      <CredentailsBox
        fieldName="Password"
        credential={credentials[1]}
        onClickHandler={handleCredentialCopy}
      />
    </>
  );
}
