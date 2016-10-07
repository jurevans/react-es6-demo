rc.inlineMessageComponent = React.createClass({
    getInitialState : function() {
        return {
            isClicked: false
        }
    },
    handleClick : function(e) {
        e.preventDefault();

        this.setState({
            isClicked: true
        })
    },
    render : function() {
        var partial = !this.state.isClicked
            ? <a href="#" onClick={this.handleClick}>{this.props.linkText}</a>
            : <div>{this.props.copyText}</div>;

        return(
            <p className="forgot-credentials">
                {partial}
            </p>
        )
    }
})
