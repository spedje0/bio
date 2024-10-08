import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Stats() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">Stats</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will display usage statistics for FileUploader.</p>
          <p className="mt-4">This page is currently under construction.</p>
        </CardContent>
      </Card>
    </>
  )
}
