import Avatar from "./Avatar"

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    )
}

export default Profile;