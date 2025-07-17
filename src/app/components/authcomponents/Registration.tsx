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
import ButtonWithBg from "../ui/ButtonWithBg";
import React from "react";

export function RegistrationBtn() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* <ButtonWithBg background="#FF8C5A">Register</ButtonWithBg> */}
          <Button className="bg-[#FF8C5A] outline-0">Register</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Register into <strong>codeskinnovations</strong>
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="fname">first name</Label>
              <Input id="fname" name="firstName" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="lname">last name</Label>
              <Input id="lname" name="lastName" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue="@peduarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="class">class</Label>
              <Input
                id="class"
                name="class"
                type="number"
                defaultValue="optional"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                name="password"
                defaultValue="enter password"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="profile">profile</Label>
              <Input
                id="profile"
                name="profile"
                type="file"
                accept="image/*"
              />
              
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
