// Clock app
const startTime = () => {
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    if (h < 10) {
        hours.textContent = '0' + h
    } else {
        hours.textContent = h
    }
    if (m < 10) {
        minuts.textContent = '0' + m
    } else {
        minuts.textContent = m
    }
    secondsHorizontal.style.width = (s / 10) + 'rem'
    secondsVertical.style.height = (s / 10) + 'rem'
    setTimeout(startTime, 1000)
}
startTime()
    // Switch dark mode
const switchBtn = document.querySelector('.sw-btn')
const contextSections = document.querySelectorAll('.content-box section')
const skillBars = document.querySelectorAll('.bar-holder>div')
switchBtn.addEventListener('click', (event) => {
        event.target.parentElement.classList.toggle('dark-mode')
        if (document.querySelector('main').style.backgroundColor == 'black') {
            document.querySelector('main').style.backgroundColor = null
                // secondsHorizontal.style.backgroundColor = null
                // secondsVertical.style.backgroundColor = null
            hours.style.color = null
                // minuts.style.color = null
            document.querySelector('nav').style.color = null
            document.querySelector('footer').style.color = null
            svgName.style.stroke = null
            svgIntro.style.fill = null
            document.querySelector('.sw-btn-holder').style.borderColor = null
            for (let i = 0; i < contextSections.length; i++) {
                x = contextSections[i]
                x.style.borderColor = null
            }
            document.querySelector('.content-box').style.color = null
            for (let i = 0; i < skillBars.length; i++) {
                x = skillBars[i]
                x.style.backgroundColor = null
            }
            gitHubBtn.style.color = null
            for (let i = 0; i < circles.length; i++) {
                x = circles[i]
                x.style.borderColor = null
                x.style.backgroundColor = null
            }
        } else {
            document.querySelector('main').style.backgroundColor = 'black'
                // secondsHorizontal.style.backgroundColor = 'orange'
                // secondsVertical.style.backgroundColor = 'orange'
            hours.style.color = 'orange'
                // minuts.style.color = 'orange'
            document.querySelector('nav').style.color = 'orange'
            document.querySelector('footer').style.color = 'orange'
            svgName.style.stroke = 'orange'
            svgIntro.style.fill = 'orange'
            document.querySelector('.sw-btn-holder').style.borderColor = 'orange'
            for (let i = 0; i < contextSections.length; i++) {
                x = contextSections[i]
                x.style.borderColor = 'white'
            }
            document.querySelector('.content-box').style.color = 'orange'
            for (let i = 0; i < skillBars.length; i++) {
                x = skillBars[i]
                x.style.backgroundColor = 'white'
            }
            gitHubBtn.style.color = 'orange'
            for (let i = 0; i < circles.length; i++) {
                x = circles[i]
                x.style.borderColor = 'orange'
                x.style.backgroundColor = 'white'
            }
        }
        secondsHorizontal.classList.toggle('back-orange')
        secondsVertical.classList.toggle('back-orange')

    })
    // Navigation
const navBtns = document.querySelectorAll('nav li')

// scroll
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.textContent == 'Home') {
        home.scrollIntoView({ behavior: 'smooth' })
    } else if (event.target.textContent == 'About') {
        about.scrollIntoView({ behavior: 'smooth' })
    } else if (event.target.textContent == 'Projects') {
        projects.scrollIntoView({ behavior: 'smooth' })
    } else if (event.target.textContent == 'Contact') {
        contact.scrollIntoView({ behavior: 'smooth' })
    }
})

// sub Navigation of About
const aboutNav = document.querySelector('.about-nav')
aboutNav.addEventListener('click', (event) => {
    if (event.target.textContent == 'BioGraphy') {
        bioGraphy.scrollIntoView({ behavior: 'smooth' })
    } else if (event.target.textContent == 'Skills') {
        skills.scrollIntoView({ behavior: 'smooth' })
    } else if (event.target.textContent == 'Experience') {
        experience.scrollIntoView({ behavior: 'smooth' })
    }
})

// Skill bars
html5.addEventListener('click', () => {
    if (html5Bar.style.width != '9rem')
        html5Bar.style.width = 9 + 'rem'
    else
        html5Bar.style.width = 1 + 'rem'
})
css3.addEventListener('click', () => {
    if (css3Bar.style.width != '8rem')
        css3Bar.style.width = 8 + 'rem'
    else
        css3Bar.style.width = 1 + 'rem'
})
javaScript.addEventListener('click', () => {
    if (javaScriptBar.style.width != '5rem')
        javaScriptBar.style.width = 5 + 'rem'
    else
        javaScriptBar.style.width = 1 + 'rem'
})
python.addEventListener('click', () => {
    if (pythonBar.style.width != '3rem')
        pythonBar.style.width = 3 + 'rem'
    else
        pythonBar.style.width = 1 + 'rem'
})
html5Bar.parentElement.addEventListener('mouseover', () => {
    html5.click()
})
css3Bar.parentElement.addEventListener('mouseover', () => {
    css3.click()
})
javaScriptBar.parentElement.addEventListener('mouseover', () => {
    javaScript.click()
})
pythonBar.parentElement.addEventListener('mouseover', () => {
    python.click()
})
html5Bar.parentElement.addEventListener('mouseout', () => {
    html5Bar.style.width = 1 + 'rem'
})
css3Bar.parentElement.addEventListener('mouseout', () => {
    css3Bar.style.width = 1 + 'rem'
})
javaScriptBar.parentElement.addEventListener('mouseout', () => {
    javaScriptBar.style.width = 1 + 'rem'
})
pythonBar.parentElement.addEventListener('mouseout', () => {
    pythonBar.style.width = 1 + 'rem'
})

// Project page
const projectPage = document.querySelector('.items')
const proItems = projectPage.querySelectorAll('.item')
const firstItem = proItems[0].innerHTML
const lastItem = document.createElement('div')
lastItem.classList.add('item')
lastItem.innerHTML = firstItem
projectPage.append(lastItem)
const circles = document.querySelectorAll('.circle')
projectPage.style.width = (proItems.length + 1) * 100 + '%'
projectPage.addEventListener('click', (event) => {
    const itemText = event.target.parentElement.parentElement.querySelector('.item-text')
    if (event.target.innerHTML == 'View Description') {
        event.target.innerHTML = 'Hide Description'
        itemText.style.visibility = 'visible'
    } else {
        itemText.style.visibility = 'hidden'
        event.target.innerHTML = 'View Description'
    }
})
let position = 0
const moveTo = (x) => {
    position += x
    console.log(proItems.length)
    const pageWidth = (proItems.length - 1) * (-100)
    if (position < pageWidth) {
        projectPage.ontransitionend = () => {
            position = 0
            projectPage.style.transition = 'none'
            projectPage.style.transform = 'translateX(' + position + '%)'
            setTimeout(() => {
                projectPage.style.transition = null
                projectPage.ontransitionend = null
            })
        }
    } else if (position > 0) {
        projectPage.style.transition = 'none'
        position = proItems.length * (-100)
        projectPage.style.transform = 'translateX(' + position + '%)'
        setTimeout(() => {
            projectPage.style.transition = null
            position = (proItems.length - 1) * (-100)
            projectPage.style.transform = 'translateX(' + position + '%)'
        })
    }
    projectPage.style.transform = 'translateX(' + position + '%)'
}

// Contact
commentList.innerHTML = localStorage.getItem('comment')
commentBtn.addEventListener('click', comment = () => {
    if (commentName.value == '') {
        document.querySelector('.form :first-child').innerHTML = 'Your name: <span style="color:red; display:inline-block">*Required</span>'
    } else {
        document.querySelector('.form :first-child').innerHTML = 'Your name:'
        if (commentText.value == '') {
            document.querySelector('.form :nth-child(3)').innerHTML = 'Your comment <span style="color:red">is empty</span>'
        } else {
            document.querySelector('.form :nth-child(3)').innerHTML = 'Your comment'
            const commentBox = document.createElement('div')
            const commentUser = document.createElement('h2')
            const commenDate = document.createElement('span')
            const commentValue = document.createElement('p')
            const today = new Date()
            const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            commentUser.textContent = commentName.value
            commenDate.textContent = m[today.getMonth()] + '. ' + today.getDay() + '. ' + today.getFullYear()
            commentUser.append(commenDate)
            commentValue.textContent = commentText.value
            commentBox.append(commentUser, commentValue)
            commentList.prepend(commentBox)
            commentName.value = ''
            commentText.value = ''
            commentList.scrollIntoView({ behavior: 'smooth' })
        }
    }
    localStorage.setItem('comment', commentList.innerHTML)
})