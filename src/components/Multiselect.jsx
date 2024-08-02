import { useState } from 'react';
import { useFloating } from '@floating-ui/react';
import style from './Multiselect.module.css';

export default function Multiselect({ title, data, checked, onCheck }) {

   const { refs, floatingStyles } = useFloating();
   const [open, setOpen] = useState(false);

   const onClick = () => { setOpen(!open); };

   return (
      <div>
         <button onClick={onClick} className={style.title} ref={refs.setReference}>
            {title}
         </button>
         <div className={style.dropdown} ref={refs.setFloating} style={floatingStyles} hidden={!open}>
            {data.map(({ id, value }) => (
               <label key={id} className={style.label}>
                  {value}
                  <input type="checkbox"
                     key={id}
                     className={style.checkbox}
                     checked={checked.get(id)}
                     onChange={(evt) => onCheck(id, evt.target.checked)}
                  />
               </label>
            ))}
         </div>
      </div >
   );
}

export function useMultiselect(data) {
   const [checked, setChecked] = useState(new Map(data.map((item) => [item.id, false])));
   const onCheck = (id, value) => setChecked(new Map(checked.set(id, value)));

   return [checked, onCheck];
}