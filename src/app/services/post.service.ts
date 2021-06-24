import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:post[]=[
    {
      title:"¿Que es Node.js?",
      description:"Este es un post de prueba para el card",
      category:"blog",
      url:"que-es-node",
      date:new Date(2021,5,1),
      image:"https://lh3.googleusercontent.com/Wx6M3wehXPDIXU1zDMjimDrv3YtBa0cBJkcesHk4VtZQaPTlMMGMSHEd8ICNWZi35fRuJppSGub2sB1QJ876f6yzqu4-y2sCrjDO7Sa2YQF9Hmh7G0t8D-yJ6Pt_lE-KjBUKx9_KlOc_swOid7XLnFPNd3YrqIr4Yj3V2kxUlrFzHXqSR8iifJ_7DXvgONjFELXiPcApX6pVTqAooNHycZoz-al6cMME9bHoSwhLBfFd0f7uvtRWRiaAc1Fa2XFTlhpMvbMYlPqNEf_wvtKGYZbPqrtAvCIJhWSJjW1jnajCBiuRB5Dg3vkQxJ87H1D20eBoUfMVubyyfM_fB0oU0YGHMyvkIg63ASUT0al4i6n1DFQlL4gpfq3Uzr4jbfccpfsQyEzi7BtMjlWVoZwTMhG8yXXKVnFGfDGUGuBZx5xJ7nNkN0UKYTYdKDXaH_k5espF0Lvg4Q409Bm3arEL5omCyQScW_s8flVACasNwANTYkYzyZiJfXhisYuxqE-o8Kib9pV85sQpb0nl0yFRIcpMWpMe8mJJjGBYjqJMyQpTnCyI0nymFKLjoC8qH_JitbUBVIi_zBKDvBOHXJkcZnllbV7O_XlJYCApV2xEUX3GLtHWLU4Y-a3N5gr4AYVcaM3eeVqSK7-DG1tGvxxcbf7sVOYs9ULdiBM5dRxI5SVmrriccA0rpWS1L5Swja5ninaq2lMCKnOk8Hv65hgY7QBy=w1200-h627-no?authuser=0"
    },
    {
      title:"¿Como hacer una API?",
      description:"Como generar una API básica",
      category:"tutorials",
      url:"como-hacer-una-api",
      date:new Date(2021,6,23),
      image:"https://lh3.googleusercontent.com/Wx6M3wehXPDIXU1zDMjimDrv3YtBa0cBJkcesHk4VtZQaPTlMMGMSHEd8ICNWZi35fRuJppSGub2sB1QJ876f6yzqu4-y2sCrjDO7Sa2YQF9Hmh7G0t8D-yJ6Pt_lE-KjBUKx9_KlOc_swOid7XLnFPNd3YrqIr4Yj3V2kxUlrFzHXqSR8iifJ_7DXvgONjFELXiPcApX6pVTqAooNHycZoz-al6cMME9bHoSwhLBfFd0f7uvtRWRiaAc1Fa2XFTlhpMvbMYlPqNEf_wvtKGYZbPqrtAvCIJhWSJjW1jnajCBiuRB5Dg3vkQxJ87H1D20eBoUfMVubyyfM_fB0oU0YGHMyvkIg63ASUT0al4i6n1DFQlL4gpfq3Uzr4jbfccpfsQyEzi7BtMjlWVoZwTMhG8yXXKVnFGfDGUGuBZx5xJ7nNkN0UKYTYdKDXaH_k5espF0Lvg4Q409Bm3arEL5omCyQScW_s8flVACasNwANTYkYzyZiJfXhisYuxqE-o8Kib9pV85sQpb0nl0yFRIcpMWpMe8mJJjGBYjqJMyQpTnCyI0nymFKLjoC8qH_JitbUBVIi_zBKDvBOHXJkcZnllbV7O_XlJYCApV2xEUX3GLtHWLU4Y-a3N5gr4AYVcaM3eeVqSK7-DG1tGvxxcbf7sVOYs9ULdiBM5dRxI5SVmrriccA0rpWS1L5Swja5ninaq2lMCKnOk8Hv65hgY7QBy=w1200-h627-no?authuser=0"
    },
    //tests
    {
      title:"test post tutorial",
      description:"Descripcion de prueba del post 2",
      category:"tutorials",
      url:"test",
      date:new Date(2021,4,30),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,0,7),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,0,14),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,2,1),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,2,8),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,2,15),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(2021,1,1),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 3",
      description:"Descripcion de prueba del post 3",
      category:"blog",
      url:"test",
      date:new Date(2021,1,8),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 4",
      description:"Descripcion de prueba del post 4",
      category:"blog",
      url:"test",
      date:new Date(2021,1,15),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
    {
      title:"test post 5",
      description:"Descripcion de prueba del post 5",
      category:"blog",
      url:"test",
      date:new Date(2021,1,20),
      image:"https://lh3.googleusercontent.com/OylpxvqcorR495QfYddsvHpglTqSjQoiQTECDmUNgJ6kw_agk3h2FuUWdDvcn04S2HH_H7q_SQdl6Mxn4dxsiC9p80vQc2RUik86PUB1mYPvdnL3Ia3UEfEKZKjfSJa2nPSSxOcifqniDCQLhBG1Z864_aRBTbK22Lf0CziFcXxgeOOQqFCAxHlcr5tlciA-GAUVxbX1vvKwUNC2zz9tCIkvAqZp6CkrLzAhuEFVUIMZrflXZ5SD0gDy2CKN3OlTwnF2Sx7e7ddTkN8tJlaoHlf7ZMrCw-dxq_WDIToPTjpkbwMvcTFIu5KddDPyNfAKqIMB6DPgziBIwvyvxdf9OK7GpBFg71CLZyLQhF15SOGWYt0ks98-K0BD1H7JaqtvlSvAtaRaYiOoDxLQjF0a9dsKw7W1a48kFvFLUIDn17A0Fu13QlHQzr2Fv22hxuSfJYv6iREcxYu_hszIl7GaLPRXUSwdTiz42u-z3sEKZ9hZGbfJEFzyR9Or-V1riCmVdRZQ0AH0NCTbVHWnYyn3Y9kStrrpiUlokbKaMvQx8LQOmOjuxN-Rlr-u3tYcUSViyjVE6RAVUk6UBZa2zD7BhOby4_VmPRJ3YnkeqdanXLghf-F8A5aVe4TLG9ymiiuWT-DVhTFkMc81k_dffeWRxUHNIVXCSArYG-yoQe4Z2n9na06JXvHNaxSA_iB5nPN-u_04jmTF1rucsnzkUhWeEKiI=w900-h520-no?authuser=0"
    },
  ]


  constructor() { }


  getBlogs(){
    let blogsArr:post[] = [];
      for (let post of this.posts){
        if(post.category == "blog"){
          blogsArr.push(post);
        }
      }
    return blogsArr;
  }

  getTutorials(){
    let tutorialsArr:post[] = [];
      for (let post of this.posts){
        if(post.category == "tutorials"){
          tutorialsArr.push(post);
        }
      }
    return tutorialsArr;
  }

  getNewPosts(){
    let postsArr:post[] = this.posts.sort(function(a,b){
      var dateA:any = new Date(a.date), dateB:any = new Date(b.date);
      return dateB - dateA;
    }); 
    return postsArr.slice(0,3);
   }




}

export interface post{
  title:string,
  description:string,
  category:string,
  url:string,
  date:Date,
  image:string
}
