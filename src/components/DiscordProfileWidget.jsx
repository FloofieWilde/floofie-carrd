import React from 'react'
import { getMe } from '../services/discord.service'

const DiscordProfileWidget = () => {
    const profile = getMe();
  return (
    <div>DiscordProfileWidget</div>
  )
}

export default DiscordProfileWidget