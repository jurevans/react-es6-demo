<<<<<<< HEAD
rc.errorMessageComponent = React.createClass({
    getInitialState() {
        return {
            show: false
        }
    },

    componentDidMount : function() {
        var self = this;

        grandCentral.on('to_errorMessage', function(data) {
=======
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
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            self.setState({
                show: data.show
            })
        });
<<<<<<< HEAD
    },

    handleClick : function(name, e) {
        e.preventDefault();
    },

    render() {
        var className = !this.state.show ? this.props.errorHideClassName : this.props.errorShowClassName;
=======
    }

    handleClick (name, e) {
        e.preventDefault();
    }

    render() {
        let className = !this.state.show ? this.props.errorHideClassName : this.props.errorShowClassName;
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

        return (
            <p className={className}>{this.props.message}</p>
        );
    }
<<<<<<< HEAD
});
=======
};
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
