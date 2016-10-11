rc.buttonComponent = React.createClass({
    getInitialState() {
        return {
            enabled : true
        }
    },

    componentDidMount : function() {
        var self = this;

        grandCentral.on('to_button', function(data) {
            self.setState({
                enabled : data.enabled
            })
        });
    },

    handleClick : function(name, e) {
        e.preventDefault();
    },

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
});
