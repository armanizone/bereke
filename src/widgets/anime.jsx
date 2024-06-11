import React from 'react'

export const Anime = () => {
  return (
    <section className="main-content">
      <div className="sugar-wrapper">
        <div className="sugar-box">
          <div className="box">
            <div className="label" />
            <div className="spoon" />
            <div className="sugar" />
          </div>
          <div className="in-the-box" />
          <div className="box-flap front" />
          <div className="box-flap back" />
          <div className="box-flap right" />
          <div className="box-flap left" />
        </div>
        <div className="sugar-pour" />
      </div>
      <div className="flour-wrapper">
        <div className="bag">
          <div className="flour">
          </div>
          <div className="wheat">
            <div className="stem" />
            <ul className="kernel">
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="flour-pour" />
      </div>
      <div className="butter-wrapper">
        <div className="butter">
          <div className="front" />
          <div className="top" />
          <div className="side" />
        </div>
      </div>
      <div className="bowl">
        <p className='text-center mt-5 text-2xl font-bold'>BEREKE</p>
      </div>
    </section>
  )
}