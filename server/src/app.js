import Twitter from 'node-tweet-stream'

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
server.listen(3000)

const t = new Twitter({
    consumer_key: 'P9MHw7pTFekD2eBThansO6Yga',
    consumer_secret: '7DeTacUc2246aoesKupGCk0TMKoOJL39G5x5BRy2IxBXFvGmUj',
    token: '1869869664-wvbYrfdCDZ2DfWXGQHKKDIvMcSa1RY3JDDQR600',
    token_secret: 'r1hlYSk5IB08n7hEstb9YFaNxQNoeyeH7DhHZcaqlrjUQ'
  })
  
const queue = ['bolsonaro']

io.on('connection', (s) => {
  s.emit('queue', queue)
  s.on('addQueue', (val) => {
    if (val) {
      queue.push(val)
      io.emit('queue', queue)
    }
  })
})

t.track(queue[0])

t.on('tweet', function (tweet) {
  io.emit('tweet', {
    profile_img: tweet.user.profile_image_url,
    text: tweet.text
  })
})

t.on('error', function (err) {
  console.log('Oh no')
})

setInterval(() => {
  if (queue.length > 1) {
    t.untrack(queue[0])
    queue.shift()
    t.track(queue[0])
    io.emit('queue', queue)
  }
}, 30000)
