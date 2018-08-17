/**
 * BLOCK: Atomic Blocks Button
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import WCLVPAButton from './components/button';
import icons from './components/icons';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n; 

// Extend component
const { Component } = wp.element;

// Register block 
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	URLInput,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
} = wp.components;

class BlockButton extends Component {
	
	render() {

		// Setup the attributes
		const { attributes: { buttonText, buttonUrl, buttonAlignment, buttonBackgroundColor, buttonTextColor, buttonSize, buttonShape, buttonTarget }, isSelected, className, setAttributes } = this.props;

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ ( value ) => {
						setAttributes( { buttonAlignment: value } );
					} }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...this.props }
			/>,
			// Show the button markup in the editor
			<WCLVPAButton { ...this.props }>
				<RichText
					tagName="span"
					placeholder={ __( 'Button text...' ) }
					keepPlaceholderOnFocus
					value={ buttonText }
					formattingControls={ [] }
					className={ classnames(
						'lvpa-button',
						buttonShape,
						buttonSize,
					) }
					style={ {
						color: buttonTextColor,
						backgroundColor: buttonBackgroundColor,
					} }
					onChange={ (value) => setAttributes( { buttonText: value } ) }
				/>
			</WCLVPAButton>,
			isSelected && (
				<form
					key="form-link"
					className={ `blocks-button__inline-link lvpa-button-${buttonAlignment}`}
					onSubmit={ event => event.preventDefault() }
					style={ {
						textAlign: buttonAlignment,
					} }
				>
					<Dashicon icon={ 'admin-links' } />
					<URLInput
						className="button-url"
						value={ buttonUrl }
						onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
					/>
					<IconButton
						icon="editor-break"
						label={ __( 'Apply' ) }
						type="submit"
					/>
				</form>
			)
		];
	}
}

// Register the block
registerBlockType( 'wclvpa/lvpa-button', {
	title: __( 'Button w/ Options' ),
	description: __( 'Add a customizable button.' ),
	icon: 'admin-links',
	category: 'wclvpa',
	keywords: [
		__( 'button' ),
		__( 'link' ),
		__( 'atomic' ),
	],
	attributes: {
		buttonText: {
			type: 'string',
		},
		buttonUrl: {
			type: 'string',
            source: 'attribute',
            selector: 'a',
            attribute: 'href',
		},
		buttonAlignment: {
			type: 'string',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '#3373dc'
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff'
		},
		buttonSize: {
			type: 'string',
			default: 'lvpa-button-size-medium'
		},
		buttonShape: {
			type: 'string',
			default: 'lvpa-button-shape-rounded'
		},
		buttonTarget: {
			type: 'boolean',
			default: false
		},
	},

	// Render the block components
	edit: BlockButton,

	// Save the attributes and markup
	save: function( props ) {
		
		// Setup the attributes
		const { buttonText, buttonUrl, buttonAlignment, buttonBackgroundColor, buttonTextColor, buttonSize, buttonShape, buttonTarget } = props.attributes;
		
		// Save the block markup for the front end
		return (
			<WCLVPAButton { ...props }>			
				{	// Check if there is button text and output
					buttonText && (
					<a
						href={ buttonUrl }
						target={ buttonTarget ? '_blank' : '_self' } 
						className={ classnames(
							'lvpa-button',
							buttonShape,
							buttonSize,
						) }
						style={ {
							color: buttonTextColor,
							backgroundColor: buttonBackgroundColor,
						} }
					>
						<RichText.Content 
							value={ buttonText } 
						/>
					</a>
				) }	
			</WCLVPAButton>
		);
	},
} );