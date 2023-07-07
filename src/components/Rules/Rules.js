import React, { useState } from 'react'
import FeildsandConditions from './FeildsandConditions/FeildsandConditions'
import FormFeilds from './FormFeilds/FormFeilds'
import MultiStep from 'react-multistep'
import ReviewAndSubmit from './ReviewandSubmit/ReviewAndSubmit'
import CreatedRules from '../CreatedRules/CreatedRules'

const Rules = () => {
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);

    const nextClick = (event) => {
        console.log("hi")
        setShowAnotherComponent(event.target.value === true);
    };

    if (showAnotherComponent) {
        return <CreatedRules />;
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='form-page-header'>
                            <p>
                                Create
                                <span> Rules</span>
                            </p>
                            <p className='sub-header'>
                                Create your new rule
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
            <FormFeilds></FormFeilds>
        </div>
        <div>
        <FeildsandConditions></FeildsandConditions>
        </div> */}

            {/* <button onClick={handleClick}>Load Another Component</button>
      )} */}
            {!showAnotherComponent && (
                <div>
                    
                    <MultiStep
                        activeStep={0}
                        
                        nextButton={{
                            style: {
                                'backgroundColor': '#E20074',
                                'color': '#fff',
                                'width': '150px',
                                'height': '40px',
                                'borderRadius': '3px',
                                'border': '1px solid #e20074',
                                // 'float': 'right',
                                'margin': '5px'
                            },
                            title: 'Continue',
                            disabled:true,
                            onClick: nextClick // Call your custom function here
                        }}
                    >
                        
                        <FormFeilds title="Feilds"></FormFeilds>
                        <FeildsandConditions title='FeildsandConditions'>
                        </FeildsandConditions>
                        <ReviewAndSubmit title="ReviewAndSubmit"></ReviewAndSubmit>
                        
                        
                    </MultiStep>
                    {showAnotherComponent && <CreatedRules />}
                    

                </div>)}
            
        </div>
    )
}

export default Rules