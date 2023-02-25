import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from './Avatar'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  

  return (
    <div className="form-widget">
        <Avatar
      uid={user.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        // updateProfile({ username, website, avatar_url: url })
      }}
    />
    </div>
  )
}