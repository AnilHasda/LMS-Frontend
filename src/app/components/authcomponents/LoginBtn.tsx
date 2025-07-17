import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ButtonWithBg from "../ui/ButtonWithBg"
import React from "react"

export function LoginBtn() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* <ButtonWithBg background="#FF8C5A">Register</ButtonWithBg> */}
          <Button variant={"outline"}  className="bg-none border border-[#c5c4bc]">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">email</Label>
              <Input id="email" name="username" type="email" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">password</Label>
              <Input id="password" name="password" type="password"defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
