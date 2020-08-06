const interval = setInterval(() => {
   const header = document.querySelector('._1QUKR')
   if (header) {
      console.log(header)
      clearInterval(interval)

      const button = document.createElement("button")
      button.innerHTML = '1.5x'
      button.classList.add('twoTimesButton')

      button.addEventListener('click', () => {
         const audios = document.querySelectorAll('audio')
         console.log(audios)
         audios.forEach((audio) => {
            console.log(audio)
            audio.playbackRate = 1.5
         })
      })

      header.appendChild(button)
   }
}, 1000)

