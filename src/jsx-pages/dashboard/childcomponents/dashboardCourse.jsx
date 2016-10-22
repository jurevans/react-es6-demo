rc.dashboardCourseComponent = React.createClass({
	getDefaultProps:function(){
        return {
            course:{
                course_id: '',
                title: '',
                book: '',
                product: '',
<<<<<<< HEAD
                cover: SiteConfig.assetsDirectory + 'images/site/pikachu.gif'
=======
                cover: SiteConfig.assetsDirectory + 'images/site/bookcover.png'
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
            }
        }
    },
    render:function(){



        return (
<<<<<<< HEAD
            <li className="course flex row">
                <div className="bookcover col-xs-4 col-sm-2 col-md-2">
                    <img src={this.props.course.cover ? this.props.course.cover : SiteConfig.assetsDirectory + 'images/site/pikachu.gif'} />
=======
            <div className="course flex row">
                <div className="bookcover col-xs-4 col-sm-2 col-md-2">
                    <img src={this.props.course.cover ? this.props.course.cover : SiteConfig.assetsDirectory + 'images/site/bookcover.png'} />
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
                </div>
                <div className="courseinfo col-xs-8 col-sm-7 col-md-7">
                    <span className="coursetitle">{this.props.course.title}</span>
                    <br />
                    <span className="coursebook">{this.props.course.book}</span>
                    <br />
                    <span className="courseproduct">{this.props.course.product}</span>
                </div>
                <div className="coursebutton col-xs-12 col-sm-3 col-md-3">
                    <button className="enterproduct">Enter product</button>
                </div>
<<<<<<< HEAD
            </li>
=======
            </div>
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
        );
    }
});