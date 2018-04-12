<template>
<div>
    <navigation></navigation>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <img class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/fi/thumb/3/3b/Perussuomalaisten_logo.svg/1200px-Perussuomalaisten_logo.svg.png" alt="Generic placeholder image" width="140" height="140">
                <h1 class="card-title pricing-card-title">62% <small class="text-muted">political</small></h1>
                <p class="description">Your posts show that you identify strongly as being left based on your behaviour.</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                    View details
                </button>    
                
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img class="rounded-circle" src="https://1.gravatar.com/avatar/4c7368542982f0f081be48fc19e1fbfb?s=256&d=identicon&r=G" alt="Generic placeholder image" width="140" height="140">
                <h1 class="card-title pricing-card-title">91% <small class="text-muted">favorite person</small></h1>
                <p class="description">Very likely a partner or best friend. You keep in touch and connect more than with your other friends.</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
                    View details
                </button>    

            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img class="rounded-circle" src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/ff/49/41/ff4941f3-cecd-9b9b-b1d7-b939b2ef045a/source/256x256bb.jpg" alt="Generic placeholder image" width="140" height="140">
                <h1 class="card-title pricing-card-title">44% <small class="text-muted">sports team</small></h1>
                <p class="description">It seems you're strongly into sports and your favorite team seems to be HIFK.</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
                    View details
                </button>                
            </div><!-- /.col-lg-4 -->
        </div>
        <br />
        <h2>Other topics</h2>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Vegetarian
                <span class="badge badge-primary badge-pill">23 %</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Baseball
                <span class="badge badge-primary badge-pill">29 %</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Car owner
                <span class="badge badge-primary badge-pill">14 %</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Boardgames
                <span class="badge badge-primary badge-pill">9 %</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Religious
                <span class="badge badge-primary badge-pill">5 %</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Ecological
                <span class="badge badge-primary badge-pill">1 %</span>
            </li>
        </ul>

        <br />
        <h2>People</h2>
        <ul class="list-group">
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://qph.fs.quoracdn.net/main-thumb-2500872-50-38eLTNx0eZ3esinrBwTWC9jfa8T0xEyg.jpeg">
                    Juho Virtanen
                </div>
                <span class="badge badge-primary badge-pill">65 %</span>
            </li>
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQbwd3edDlV5N0T2fMVEdUeHxyoFHqVongDkh4qZZdm1J7Gfhig">
                    Dennis Kihara
                </div>
                <span class="badge badge-primary badge-pill">49 %</span>
            </li>
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://qph.fs.quoracdn.net/main-thumb-70025961-50-yqyqinfchxnlnxczdyrlkkkdjnlrfjtu.jpeg">
                    Iida Kivi
                </div>
                <span class="badge badge-primary badge-pill">45 %</span>
            </li>
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://leaderchat.files.wordpress.com/2014/10/bigstock-business-concept-unsure-thin-63007831.jpg?w=50&h=50&crop=1">
                    Susanna Pitkänen
                </div>
                <span class="badge badge-primary badge-pill">39 %</span>
            </li>
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://img.stockfresh.com/files/w/wavebreak_media/x/33/5681840_93348721.jpg">
                    Laura Nykänen
                </div>
                <span class="badge badge-primary badge-pill">25 %</span>
            </li>
            <li class="list-group-item img d-flex justify-content-between align-items-center">
                <div>
                    <img class="list-img" src="https://img.stockfresh.com/files/t/tepic/a/tepic.jpg">
                    Harri Miettinen
                </div>
                <span class="badge badge-primary badge-pill">15 %</span>
            </li>
        </ul>
        <br />
        <br />
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select data for removal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a data-toggle="collapse" href="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                        2 photos
                    </a>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            
                        </label>
                    </div>
                </li>
                <div class="collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <img class="list-img small" src="https://kuvat.uusisuomi.fi/sites/default/files/imagecache/artikkelikuva_std/kuvat/17.53164374.jpg">
                                <div>
                                    Olipa kiva puhe eilen Trumpilta, jäbä on äijä!
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck2">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <img class="list-img small" src="https://i.pinimg.com/originals/a4/a7/50/a4a7505287aeea786e8bba031c83a42b.jpg">
                                <div>
                                    Niin hyvää propagandaa.
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck3">
                                    <label class="form-check-label" for="defaultCheck3">
                                                                                
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a data-toggle="collapse" href="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample1">
                        4 posts
                    </a>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck4">
                        <label class="form-check-label" for="defaultCheck4">
                                                        
                        </label>
                    </div>
                </li>
                <div class="collapse" id="multiCollapseExample2">
                    <div class="card card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Olin tänään kokouksessa.
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck5">
                                    <label class="form-check-label" for="defaultCheck5">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Niin hyvää propagandaa.
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck6">
                                    <label class="form-check-label" for="defaultCheck6">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Jytky!
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck6">
                                    <label class="form-check-label" for="defaultCheck6">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Oispa kaliaa.
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck6">
                                    <label class="form-check-label" for="defaultCheck6">
                                                                                
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a data-toggle="collapse" href="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample1">
                        3 likes
                    </a>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck7">
                        <label class="form-check-label" for="defaultCheck7">
                                                                    
                        </label>
                    </div>
                </li>
                <div class="collapse" id="multiCollapseExample3">
                    <div class="card card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Trump
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck8">
                                    <label class="form-check-label" for="defaultCheck8">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    Perussuomalaiset
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck9">
                                    <label class="form-check-label" for="defaultCheck9">
                                                                                
                                    </label>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    NATO
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" id="defaultCheck9">
                                    <label class="form-check-label" for="defaultCheck9">
                                                                                
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" class="btn btn-primary">Delete Selected</button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
.col-lg-4 {
    text-align: center;
}
.row {
    margin-top: 50px;
}
.description {
    min-height: 80px;
}
.list-group-item.img {
    padding: 0 1.25rem 0 0;
    text-align: left;
}
.list-img {
    margin: 0;
}
.list-img.small {
    height: 100px;
    padding-right: 15px;
}
.form-check-label {
    font-size: 32px;
}
.form-check-input {
    width: 20px;
    height: 20px;
}
</style>
