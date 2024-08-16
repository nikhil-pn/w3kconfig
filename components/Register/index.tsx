"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import { db } from "../../app/firebase/config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandX,
} from "@tabler/icons-react";
import "./style.css";

async function addDataToFirestore(name, email) {
  try {
    // Validation: Check if name and email are not empty
    if (!name || !email) {
      alert("Please fill in all fields.");
      return false;
    }

    // Validation: Check if w3kHandle is valid (only characters and numbers)
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (!nameRegex.test(name)) {
      alert("W3kHandle should contain only characters and numbers.");
      return false;
    }

    // Validation: Check if email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Check if username or email already exists
    const q1 = query(collection(db, "w3kHandle"), where("name", "==", name));
    const q2 = query(collection(db, "w3kHandle"), where("email", "==", email));

    const snapshot1 = await getDocs(q1);
    const snapshot2 = await getDocs(q2);

    if (!snapshot1.empty) {
      alert("w3kHandle already exists.");
      return false;
    } else if (!snapshot2.empty) {
      alert("Email already exists.");
      return false;
    }

    const docRef = await addDoc(collection(db, "w3kHandle"), {
      name: name,
      email: email,
    });
    console.log("Document ID is:", docRef.id);
    return true;
  } catch (e) {
    console.error(e);
    alert("Error creating user");
    return false;
  }
}
export function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(username, email);
    if (added) {
      setEmail("");
      setUsername("");
      setSuccessMessage(true);
    }
  };
  return (
    <div className="blockk">
      <div className="glow max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-zinc-950 hover:border-l-orange-300">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Register here
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Fill the form to attend w3k conference 2024
        </p>
        {successMessage && (
          <div
            role="alert"
            className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">
              Success - Everything went smoothly!
            </p>
          </div>
        )}
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="Username">W3kHandle</Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
                  .w3k
                </span>
              </div>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="tyler.w3k@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </LabelInputContainer>
          <br></br>
          <button
            className="buttonn group/btn block from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Register →
            <BottomGradient />
          </button>
          {/* <div className="overlay h-10"></div> */}
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto bottom-8 inset-x-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto bottom-8 inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
