import React, { Component } from 'react';
// import Navbar from './navbar.js';
import { Grid, Image, Label, Segment } from 'semantic-ui-react'


const LabelExampleRibbon = () => (
    <Grid columns={2}>
        <Grid.Column>
            <Segment raised>
                <Label as='a' color='red' ribbon>Overview</Label>
                <span>Account Deeqweqweqwewqetails</span>

                <Image src='/assets/images/wireframe/paragraph.png' />

                <Label as='a' color='blue' ribbon>Community</Label>
                <span>User RevieqweqweqweqweqwewqeqweqweqweqwwsUser RevieqweqweqweqweqwewqeqweqweqweqwwsUser Revieqweqweqweqweqwewqeqweqweqweqwws</span>

                <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
        </Grid.Column>

        <Grid.Column>
            <Segment>
                <Label as='a' color='orange' ribbon='right'>Specs</Label>
                <Image src='/assets/images/wireframe/paragraph.png' />

                <Label as='a' color='teal' ribbon='right'>Reviews</Label>
                <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
        </Grid.Column>
    </Grid>
)

export default LabelExampleRibbon

                    

