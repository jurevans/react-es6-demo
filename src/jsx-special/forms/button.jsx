rc.buttonComponent = class ButtonComponent extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            enabled: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount () {
        var self = this;

        grandCentral.on('to_button', (data) => {
            self.setState({
                enabled : data.enabled
            })
        });
    }

    handleClick (name, e) {
        e.preventDefault();
    }

    render() {
        return (
            <p>
                <button
                    name={this.props.buttonName}
                    className={this.props.className}
                    disabled={!this.state.enabled}>
                    {this.props.buttonText}
                </button>

            </p>
        );
    }
};
