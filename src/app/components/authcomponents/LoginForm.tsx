"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import usePostData from "@/app/hooks/PostData";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { postData, result, responseError, loading } = usePostData();
  useEffect(() => {
    if(result?.success) toast.success(result?.message || "login successful");
    if(responseError) toast.error(responseError?.response?.data?.message || "failed to login");
  }, [responseError, result]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postData("/auth/login", formData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <ButtonWithBg background="#FF8C5A">Register</ButtonWithBg> */}
        <Button variant={"outline"} className="bg-none border border-[#c5c4bc]">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={loginHandler}>
          <DialogHeader>
            <DialogTitle>Login profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="enter email"
                onChange={handleInput}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="enter password"
                onChange={handleInput}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {loading ? <ClipLoader size={15} /> : "login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
