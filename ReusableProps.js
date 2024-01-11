import React, { Component } from 'react'


class ReusableProps extends Component {
  render() {
    return (
      <div>

      {this.props.headerWrapper && <header className={this.props.headerWrapper}>
      <h1>{this.props.headerText}</h1>
      </header>
      }
    
    {this.props.bannerSection &&<section className={this.props.bannerSection}>
      <div className={this.props.bannerDiv}>
        <img src={this.props.bannerImage} />
      </div>
    </section>
    }

    {this.props.puppy1 && <section>
      <div className={this.props.puppiesContainer}>
        <div className={this.props.puppy1}>
          <img src={this.props.puppyOne}  />
        </div>
        <div className={this.props.missingPuppy}>
          <p>{this.props.Paragraph}</p>
        </div>
        <div className={this.props.puppy2}>
          <img src={this.props.puppyTwo}/>
        </div>
      </div>
    </section>
  }


    {this.props.Id &&<section>
      <div id={this.props.Id}>
        <p>{this.props.morePuppies}</p>
      </div>
      <div className={this.props.puppiesContainer}>
        <div className={this.props.puppy3}>
          <img src={this.props.PuppyThree} />
        </div>
        <div className={this.props.puppy4}>
          <img src={this.props.PuppyFour} />
        </div>
      </div>
    </section>
  }


   {this.props.footer && <footer>
      <div className={this.props.footer}>
        <p>
          {this.props.developer}
          <em>
            <strong>{this.props.Author}</strong> <br />
            {this.props.text} <strong>{this.props.bootCamp}</strong> <br />
            
            {this.props.clander}
          </em>
        </p>
      </div>
    </footer>
  }
    </div>
    )
  }
}

export default  ReusableProps;