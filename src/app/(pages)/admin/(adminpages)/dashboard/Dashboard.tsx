"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Users, BookOpen, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  // Sample data - replace with API data
  const revenueData = [
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 5300 },
    { month: "Mar", revenue: 6100 },
    { month: "Apr", revenue: 4900 },
    { month: "May", revenue: 7200 },
    { month: "Jun", revenue: 8100 },
  ];

  const courseData = [
    { course: "React Mastery", students: 120 },
    { course: "Scratch for Kids", students: 95 },
    { course: "Next.js Pro", students: 80 },
    { course: "Python Basics", students: 75 },
  ];

  return (
    <div className="p-6 space-y-6 pb-40">
      {/* Top Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Students</CardTitle>
            <Users className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,245</p>
            <p className="text-sm text-muted-foreground">+15% this month</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Courses</CardTitle>
            <BookOpen className="text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
            <p className="text-sm text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$32,450</p>
            <p className="text-sm text-muted-foreground">+8% this month</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Growth</CardTitle>
            <TrendingUp className="text-red-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+12%</p>
            <p className="text-sm text-muted-foreground">Since last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Courses Chart */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Most Enrolled Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="course" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
