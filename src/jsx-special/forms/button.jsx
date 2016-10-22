<<<<<<< HEAD
rc.buttonComponent = React.createClass({
    getInitialState() {
        return {
            enabled : true
        }
    },

    componentDidMount : function() {
        var self = this;

        grandCentral.on('to_button', function(data) {
=======
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
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            self.setState({
                enabled : data.enabled
            })
        });
<<<<<<< HEAD
    },

    handleClick : function(name, e) {
        e.preventDefault();
    },
=======
    }

    handleClick (name, e) {
        e.preventDefault();
    }
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f

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
<<<<<<< HEAD
});
=======
};
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
