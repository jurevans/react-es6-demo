rc.inputFieldComponent = React.createClass({
    getInitialState() {
        return {
            value : '',
            valid : true
        }
    },
    defaultProps: {
        name: 'input',
        className: 'forminput',
        type: 'text',
        required: '',
        value: '',
        maxLength: 0
    },
    componentDidMount: function() {
        var self = this;

        grandCentral.on('to_inputField_' + this.props.name, function(data) {
            self.setState({
                value : self.state.value,
                valid : data.valid
            })
        });
    },
    handleChange: function(name, e) {
        var value = e.target.value;

        this.setState({
            value : value,
            valid : typeof(this.props.validate) !== 'undefined'
                ? this.props.validate.call(this, value)
                : true
        });

        // re-enable button, hide errors
        /* NOTE: May want to parameterize this behavior! */
        grandCentral.trigger('to_button', {enabled: true});
        grandCentral.trigger('to_errorMessage', {show: false});
    },

    render() {
        var errorClass = this.state.valid ? null : this.props.errorClass;

        return (
            <div className={errorClass}>
                <label htmlFor={this.props.name} className={this.props.labelClass}>
                    {this.props.labelText}
                </label>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    className={this.props.inputClass}
                    type={this.props.type}
                    required={this.props.required}
                    value={this.state.value}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange.bind(null, this)} />
            </div>
            );
        }
});
