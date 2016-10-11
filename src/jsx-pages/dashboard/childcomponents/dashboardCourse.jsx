rc.dashboardCourseComponent = React.createClass({
	getDefaultProps:function(){
        return {
            course:{
                course_id: '',
                title: '',
                book: '',
                product: '',
                cover: SiteConfig.assetsDirectory + 'images/site/bookcover.png'
            }
        }
    },
    render:function(){



        return (
            <div className="course">
                <div className="bookcover">
                    <img src={this.props.course.cover ? this.props.course.cover : SiteConfig.assetsDirectory + 'images/site/bookcover.png'} />
                </div>
                <div className="courseinfo">
                    <span className="coursetitle">{this.props.course.title}</span>
                    <br />
                    <span className="coursebook">{this.props.course.book}</span>
                    <br />
                    <span className="courseproduct">{this.props.course.product}</span>
                </div>
                <div className="coursebutton">
                    <button className="enterproduct">Enter product</button>
                </div>
            </div>
        );
    }
});