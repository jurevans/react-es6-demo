rc.errorMessageComponent = class ErrorMessage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        let self = this;

        grandCentral.on('to_errorMessage', (data) => {
            self.setState({
                show: data.show
            })
        });
    }

    handleClick (name, e) {
        e.preventDefault();
    }

    render() {
        let className = !this.state.show ? this.props.errorHideClassName : this.props.errorShowClassName;

        return (
            <p className={className}>{this.props.message}</p>
        );
    }
};
