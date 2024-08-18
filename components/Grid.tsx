import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section>
      <div>
        <BentoGrid>
            {gridItems.map((item) =>(
                <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className} 
                img={item.img} 
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
                 />
             ))}
        </BentoGrid>
        </div>
    </section>
  )
}

export default Grid