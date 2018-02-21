import { 
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle,
	CardFooter, 
	CardHeader, 
	Button 
} from 'reactstrap';

var React = require('react');
var PropTypes = require('prop-types');

class QuickCard extends React.Component {
	constructor(props){
		super(props); 
		this.state = {
			title: props.title, 
			subtitle: props.subtitle,
			bodytext: props.bodytext,
			imgpath: props.imgpath,
			imgalt: props.imgalt,
			topwidth: props.topwidth, 
		};
	}
	render(){
		return(
			    <div>
			      <Card>
			        <CardImg top width={this.state.topwidth} src={this.state.imgpath} alt={this.state.imgalt}/>
			        <CardBody>
			          <CardTitle>{this.state.title}</CardTitle>
			          <CardSubtitle>{this.state.subtitle}</CardSubtitle>
			          <CardText>{this.state.bodytext}</CardText>
			          <Button>Button</Button>
			        </CardBody>
			        <CardFooter>Footer</CardFooter>
			      </Card>
			    </div>
			)
	}
};

QuickCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	bodytext: PropTypes.string.isRequired,
	imgpath: PropTypes.string.isRequired,
	imgalt: PropTypes.string.isRequired, 
	topwidth: PropTypes.string.isRequired,
}

QuickCard.defaultProps = {
	title: 'Title Text',
	subtitle: 'Subtitle Text',
	bodytext: 'Some descriptive text that you should replace with something cool.',
	imgpath: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
	imgalt: 'Image is broken',
	topwidth: '100%',
}

export default (QuickCard)