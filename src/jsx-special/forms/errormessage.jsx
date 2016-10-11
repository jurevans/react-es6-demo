rc.errorMessageComponent = React.createClass({
    getInitialState() {
        return {
            show: false
        }
    },

    componentDidMount : function() {
        var self = this;

        grandCentral.on('to_errorMessage', function(data) {
            self.setState({
                show: data.show
            })
        });
    },

    handleClick : function(name, e) {
        e.preventDefault();
    },

    render() {
        var className = !this.state.show ? this.props.errorHideClassName : this.props.errorShowClassName;

        return (
            <p className={className}>{this.props.message}</p>
        );
    }
});
