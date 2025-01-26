import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import MusicSection from './MusicSection'
const SpotifyEmbed = () => {
  return (
    <Card className="w-4/5 text-center mx-auto">
            <CardHeader>
                <CardTitle className=" text-3xl">See the beats behind the code🎵</CardTitle>
                <CardDescription className="text-xl">all the good playlists i listen to</CardDescription>
            </CardHeader>
            <CardContent>
                <MusicSection/>
            </CardContent>
        </Card>
  )
}

export default SpotifyEmbed