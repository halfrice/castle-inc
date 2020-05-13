import React from "react"
import PropTypes from "prop-types"
import {
  IconFacebook,
  IconGoogle,
  IconInstagram,
  IconLion,
  IconTwitter,
} from "~components/icons"

const Icon = ({ name }) => {
  switch (name.toLowerCase()) {
    case "lion":
      return <IconLion />

    // social media
    case "facebook":
      return <IconFacebook />
    case "google":
      return <IconGoogle />
    case "twitter":
      return <IconTwitter />
    case "instagram":
      return <IconInstagram />

    default:
      return <IconLion />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
