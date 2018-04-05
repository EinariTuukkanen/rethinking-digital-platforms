<template>
<div>
    <navigation></navigation>
    <div class="container">
        <h2>Collected user data</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Control</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>First names</td>
                <td>Karri Iivari</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Last name</td>
                <td>Pöllö</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Age</td>
                <td>21</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Current City</td>
                <td>Espoo</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Birthdate</td>
                <td>19.3.1997</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Birth place</td>
                <td>Karkkila</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>080 912 1552</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Email</td>
                <td>karri.pollo@facebook.com</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>Male</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Address</td>
                <td>Hiipparinne 13 C 2</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Username (in connected services)</td>
                <td>kpollo@gmail.com</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Activities</td>
                <td>Pesäpallo</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Music</td>
                <td>Led Zeppelin</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Television</td>
                <td>Game of Thrones</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Workplace</td>
                <td>Aalto University - Teaching assistant</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Other</td>
                <td>ASUS, Programming, Baseball, Steam, Telia</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Games</td>
                <td>Gameloft</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Restaurants</td>
                <td>Fat Lizard</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Groups</td>
                <td>Otakoppi, Fuksit 16, Teekkarikylän markkinat</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Admin on pages</td>
                <td>Kaveriporukan hupiryhmä</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Education</td>
                <td>Karkkila High School, Aalto University School of Science</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            <tr>
                <td>Previous relationships</td>
                <td>Mirri Kuusi</td>
                <td><i class="far fa-trash-alt"></i> &nbsp; <i class="far fa-edit"></i></td>
            </tr>
            </tbody>
        </table>
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
