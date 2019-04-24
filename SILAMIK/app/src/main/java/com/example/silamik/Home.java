package com.example.silamik;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.example.silamik.MainActivity;
import com.example.silamik.R;

import butterknife.OnClick;
import butterknife.ButterKnife;

public class Home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        ButterKnife.bind(this);
    }

    @OnClick(R.id.btnlogout)
    void btnlogout(){;
        Intent a = new Intent(Home.this, MainActivity.class);
        startActivity(a);
        finish();
    }
}

