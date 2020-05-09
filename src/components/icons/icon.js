import React from "react"
import PropTypes from "prop-types"
import { IconLion } from "~components/icons"

const Icon = ({ name }) => {
  switch (name.toLowerCase()) {
    case "lion":
      return <IconLion />
    default:
      return <IconLion />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
