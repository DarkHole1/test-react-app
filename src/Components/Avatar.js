function Avatar({ person, size = 100 }) {
    return (
      <img
        className="avatar"
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }

export default Avatar;