
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {

   const [data, setData] = useState([]);

   const colors = ['#219EBC', '#023047', '#FFB703', '#FB8500', '#2A9D8F'];

   useEffect(() => { setData(() => getData());}, [events]);

   const getData = () => {
      //array with event genres
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
      /* get event array and extract summary.  split summary into an array of words and 
      see if given genre is included. count number of a particular genre is filtered*/
      const data = genres.map((genre) => {
         const value = events.filter(({summary}) => summary.split(' ').includes(genre)).length;
         return {name: genre, value}
      })
      return data;
   }


   return (
      <ResponsiveContainer height={400}>
         <PieChart width={400} height={400}>
            <Pie 
               data = {data}
               cx = {200}
               cy = {200}
               labelLine = {false}
               outerRadius = {80}
               fill="#8884d8"
               dataKey = "value"
               label={({ name, percent }) =>
               `${name} ${(percent * 100).toFixed(0)}%`
             }>
                {
                     data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name}/>)
                }
            </Pie>
         </PieChart>
      </ResponsiveContainer>
   )
}

export default EventGenre;