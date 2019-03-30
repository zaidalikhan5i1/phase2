this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache').then(function(ca)
  {
    ca.addAll([
      '/index.html',
      '/css/index.css'

    ])
  })
  )
})
//fetch

this.addEventListener('fetch',function(event){
  event.respondWidth(caches.open('mycache')).then(function(cache){
    return cache.match(event.request).then(function(response){
      return response || fetch(event.request).then(function(response){
        cache.put(event.request,response.clone());

        return result;
      })
    })
  })
})
