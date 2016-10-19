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
            ? <a href="#" className={this.props.linkClassName} onClick={this.handleClick}>{this.props.linkText}</a>
            : <div className={this.props.copyClassName}>{this.props.copyText}</div>;

        return(
            <p className={this.props.className}>
                {partial}
            </p>
        )
    }
})
