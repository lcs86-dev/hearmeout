'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useMemo, useState } from "react"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export default function Session() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Listener', content: 'Hello! How can I help you today?' },
    { id: 2, sender: 'User', content: "Hi, I've been feeling stressed lately.'" },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [sessionStatus, setSessionStatus] = useState('active')
  const [isPrivate, setIsPrivate] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [rating, setRating] = useState(0)

  const capitalizedStatus = useMemo(() => capitalize(sessionStatus), [sessionStatus])

  const endSession = () => {
    setSessionStatus('completed')
    setShowFeedback(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex text-foreground justify-between items-center">
              <span>Counseling Session</span>
              <span>{capitalizedStatus}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Report Issue</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Report an Issue</DialogTitle>
                    <DialogDescription>
                      Please describe the issue you're experiencing. We'll review it as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <Textarea placeholder="Describe the issue here..." />
                  <DialogFooter>
                    <Button type="submit">Submit Report</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div>
              {messages.map((message) => (
                <div key={message.id} className={`mb-2 ${message.sender === 'User' ? 'text-right' : ''}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>{message
                    .content}</span>
                </div>
              ))}
            </div>
            <form className="flex gap-2">
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={endSession} className="w-full outline">End Session</Button>
          </CardFooter>

          <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Session Feedback</DialogTitle>
                <DialogDescription>
                  Please rate your experience and provide any feedback.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${star <= rating ? 'text-amber-400 fill-current' : 'text-gray-200'
                      }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <Textarea placeholder="Your feedback (optional)" />
              <DialogFooter>
                <Button type="submit" onClick={() => setShowFeedback(false)}>Submit Feedback</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
      </div>
    </div>
  )
}