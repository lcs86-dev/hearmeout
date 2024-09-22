"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const expertiseAreas = [
  "Relationships", "Career", "Stress Management", "Anxiety", "Depression",
  "Self-Esteem", "Family Issues", "Grief", "Addiction", "LGBTQ+ Support"
]

const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Arabic"]

export default function ListenerProfileSettings() {
  const [availableAllDay, setAvailableAllDay] = useState(false)

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Listener Profile Setup</CardTitle>
          <CardDescription>Help us understand how you can support others</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="expertise">Areas of Expertise</Label>
              <div className="grid grid-cols-2 gap-2">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <Checkbox id={area} />
                    <Label htmlFor={area}>{area}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Availability</Label>
              <div className="flex items-center space-x-2">
                <Switch
                  id="available-all-day"
                  checked={availableAllDay}
                  onCheckedChange={setAvailableAllDay}
                />
                <Label htmlFor="available-all-day">Available all day</Label>
              </div>
              {!availableAllDay && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input type="time" id="start-time" />
                  </div>
                  <div>
                    <Label htmlFor="end-time">End Time</Label>
                    <Input type="time" id="end-time" />
                  </div>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}