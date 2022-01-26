import { checkPropTypes } from "prop-types"
export const findByTestAttr = (wrapper, value) =>{
    return wrapper.find(`[data-test="${value}"]`)
}

export const checkProps = (component, confirmingProps)=>{
   const propError = checkPropTypes(
       component.propTypes,
       confirmingProps,
       'prop',
       component.name
   );
   expect(propError).toBeUndefined();
}