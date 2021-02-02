/** @jsx jsx */
import { jsx } from 'theme-ui'

const Front = props => (
    <div
        sx={{
            bg: "rgba(20, 40, 120, 0.8)",
            padding: "30px",
            color: "white"
        }}
    >
        <h3>the front</h3>
        <p>{props.text}</p>
    </div>
)

const CardFlip = (props) => {
    return (
        <div>
            <Front text={props.front} />
            test
        </div>
    )
}

export default CardFlip
