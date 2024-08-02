import { useMemo } from "react";
import { data, departments, locations, hours } from "../data/data";
import Multiselect from "./Multiselect";
import style from "./Page.module.css";
import { useMultiselect } from "./Multiselect";
import Card from "./Card";

export default function Page() {


   const [departmentsChecked, departmentsOnCheck] = useMultiselect(departments);
   const [locationsChecked, locationsOnCheck] = useMultiselect(locations);
   const [hoursChecked, hoursOnCheck] = useMultiselect(hours);

   const filteredData = useMemo(() => {
      return data.filter((item) => {
         const shouldFilter = (checked, data, value) => {
            const arr = [...checked]
            const anyChecked = arr.some(([id, checked]) => checked);
            return !anyChecked || arr
               .filter(([_, checked]) => checked)
               .map(([id, _]) => id)
               .map(id => data[id].value)
               .includes(value);
         }
         return (
            shouldFilter(departmentsChecked, departments, item.department)
            && shouldFilter(locationsChecked, locations, item.location)
            && shouldFilter(hoursChecked, hours, item.hours)
         );
      });
   }, [departmentsChecked, locationsChecked, hoursChecked]);

   return (
      <div className={style.page}>
         <span className={style.superTitle}>Lekker werken</span>
         <h1 className={style.title}>Nulla vitae elit libero, a pharetra</h1>
         <section role="filters">
            <Multiselect title="afdeling" data={departments} checked={departmentsChecked} onCheck={departmentsOnCheck} />
            <Multiselect title="locatie" data={locations} checked={locationsChecked} onCheck={locationsOnCheck} />
            <Multiselect title="uren" data={hours} checked={hoursChecked} onCheck={hoursOnCheck} />
         </section>
         <div className={style.cards}>
            {filteredData.map((item, index) => (
               <Card key={index} data={item} />
            ))}
         </div>
      </div>
   );
}

