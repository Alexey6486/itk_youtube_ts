import React from "react";
import s from './FormsControl.module.css';

// const Textarea = ({input, meta, ...props}: any) => {
//     const err = meta.touched && meta.error;
//
//     return (
//         <div className={err ? `${s.formGroup} ${s.error}` : `${s.formGroup}`}>
//              <textarea {...input} {...props}/>
//             {err && <span>{meta.error}</span>}
//         </div>
//     )
// }


const Element = (Element: any) => ({ input, meta, ...props }: any) => {
    const err = meta.touched && meta.error;
    return (
        <div className={ s.formGroup + " " + (err ? s.error : "") }>
            <Element {...input} {...props} />
            { err && <span> { meta.error } </span> }
        </div>
    );
};


export const Textarea = Element("textarea");
export const Input = Element("input");
